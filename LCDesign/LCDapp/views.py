# encoding:utf-8
from django.shortcuts import render
from django.template import RequestContext
from django.http import HttpResponseRedirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import authenticate
from django.contrib.auth.decorators import login_required
from django.contrib import auth
from django.core.mail import EmailMultiAlternatives

def Inicio(request):
    class Email():
        def __init__(self,nombre,telefono,mail,consulta):
            self.nombre = nombre
            self.telefono = telefono
            self.mail = mail
            self.consulta = consulta
        def email(self):
            self.subject = "Información LCDesignWeb"
            self.text_content = 'INFO'
            self.html_content = '<p>Nombre: %s.</p><p>Telefono: %s.</p><p>Email: %s.</p><p>Consulta: %s.</p>'%(self.nombre,self.telefono,self.mail,self.consulta)
            self.from_email = self.mail
            self.to = 'info@lcdesignweb.es'
            msg = EmailMultiAlternatives(self.subject, self.text_content, self.from_email, [self.to])
            msg.attach_alternative(self.html_content, "text/html")
            msg.send()
            return
        
    if request.method == 'POST':
        nombre = request.POST['nombre']
        telefono = request.POST['telefono']
        mail = request.POST['email']
        consulta = request.POST['consulta']
        correo = Email(nombre,telefono,mail,consulta)
        print (nombre,telefono,mail,consulta)
        correo.email()
    

    return render(request, 'inicio.html')
    
    
