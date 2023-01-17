from django.shortcuts import render, redirect
from users.forms import SignupForm
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import auth

def main(request):
    return render(request, "users/main.html")


def signup(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)
        if form.is_valid():
            user = form.save()
            auth.login(request, user)
            #메소드 받고, 페이지 이동      
            return render(request, template_name="users/success.html")
        else:
            #url 호출
            return redirect('users:signup')
    else:
        form = SignupForm()
        context = {
            'form': form,
        }
        return render(request, template_name='users/signup.html', context=context)


def login(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            user = form.get_user()
            auth.login(request, user)
            return redirect('users:main')
        else:
            context = {
                'form': form,
            }
            return render(request, template_name='users/login.html', context=context)
    else:
        form = AuthenticationForm()
        context = {
            'form': form,
        }
        return render(request, template_name='users/login.html', context=context)


def logout(request):
    auth.logout(request)
    return redirect('users:main')