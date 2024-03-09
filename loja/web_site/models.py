from django.db import models


class Produto(models.Model):
    nome = models.CharField(max_length=200)
    descricao = models.TextField()
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    estoque = models.IntegerField()
    imagem = models.ImageField(upload_to="static/img/produtos")
    criado = models.DateTimeField(auto_now_add=True) 
    atualizado = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nome
    
