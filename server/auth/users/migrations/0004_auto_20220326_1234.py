# Generated by Django 3.2.4 on 2022-03-26 07:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_contractor_project_worker'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='Contractor_id',
            new_name='Contractor',
        ),
        migrations.RenameField(
            model_name='worker',
            old_name='Contractor_id',
            new_name='Contractor',
        ),
        migrations.RenameField(
            model_name='worker',
            old_name='Project_id',
            new_name='Project',
        ),
    ]
