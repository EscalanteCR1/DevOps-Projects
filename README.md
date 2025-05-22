# 🚀 Node.js App Deployment with Terraform, AWS ECS & Docker

Este proyecto implementa una aplicación Node.js (Express) en AWS usando Docker y Terraform como infraestructura como código.

---

## 🧱 Tecnologías utilizadas

- **Terraform** – Provisión de infraestructura en AWS  
- **Docker** – Contenerización de la aplicación  
- **AWS ECS (Fargate)** – Ejecución del contenedor  
- **S3 Backend** – Almacenamiento del estado de Terraform  
- **Node.js + Express** – Aplicación web sencilla  

---

## 📁 Estructura del proyecto

```
├── Dockerfile          # Define la imagen Docker
├── app.js              # Código fuente de la app Node.js
├── main.tf             # Infraestructura principal (VPC, ECS, roles, S3)
├── variables.tf        # Variables reutilizables de Terraform
├── .gitignore          # Exclusiones del repositorio
```

---

## ⚙️ Requisitos

- [Terraform](https://developer.hashicorp.com/terraform/downloads)  
- [Docker](https://www.docker.com/products/docker-desktop)  
- Cuenta de [AWS](https://aws.amazon.com/)  
- Clave SSH pública cargada en GitHub y asociada a AWS  

---

## 🚀 Pasos para desplegar

```bash
terraform init
terraform plan
terraform apply
```

> El estado de Terraform se almacena en un bucket de S3 configurado en `main.tf`..

---

## 🌐 Acceso a la aplicación

Una vez desplegado, tu servicio estará accesible mediante la URL del Load Balancer generado por AWS ECS Fargate.

---

## 🐳 Docker

El `Dockerfile` construye una imagen básica de Node.js que sirve un mensaje de prueba:

```bash
docker build -t node-app .
docker run -p 8080:8080 node-app
```

---

## 🤖 Automatización

Este proyecto está listo para integrarse con **GitHub Actions** para automatizar la ejecución de Terraform al hacer push al repositorio..

---

## 🔐 Seguridad

- Los secretos como claves SSH y credenciales AWS deben almacenarse como **GitHub Secrets**.
- El bucket S3 está configurado con acceso privado y cifrado.
