# Generated by Django 3.2.4 on 2022-03-26 17:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_auto_20220326_1828'),
    ]

    operations = [
        migrations.AddField(
            model_name='worker',
            name='Aadhaar_no',
            field=models.CharField(max_length=20, null=True),
        ),
    ]
