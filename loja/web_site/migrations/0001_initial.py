# Generated by Django 5.0.3 on 2024-03-09 19:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Produto",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("nome", models.CharField(max_length=200)),
                ("descricao", models.TextField()),
                ("preco", models.DecimalField(decimal_places=2, max_digits=10)),
                ("estoque", models.IntegerField()),
                ("imagem", models.ImageField(upload_to="static/img/produtos")),
                ("criado", models.DateTimeField(auto_now_add=True)),
                ("atualizado", models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
