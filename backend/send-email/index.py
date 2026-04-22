import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

RECIPIENT_EMAIL = "rostovtzeva.lesya@yandex.ru"
SENDER_EMAIL = "rostovtzeva.lesya@yandex.ru"


def handler(event: dict, context) -> dict:
    """Отправка заявки на вступление в медиацентр или сообщения для связи на почту руководителя."""

    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Max-Age": "86400",
            },
            "body": "",
        }

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    message = body.get("message", "").strip()
    form_type = body.get("form_type", "contact")

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"error": "Имя и телефон обязательны"}, ensure_ascii=False),
        }

    subject = "Заявка на вступление в медиацентр" if form_type == "join" else "Новое сообщение с сайта медиацентра"

    html_body = f"""
    <h2>{subject}</h2>
    <p><b>Имя:</b> {name}</p>
    <p><b>Телефон:</b> {phone}</p>
    {"<p><b>Сообщение:</b> " + message + "</p>" if message else ""}
    <hr>
    <p style="color:#888;font-size:12px">Отправлено с сайта Школьного медиацентра</p>
    """

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = SENDER_EMAIL
    msg["To"] = RECIPIENT_EMAIL
    msg.attach(MIMEText(html_body, "html", "utf-8"))

    smtp_password = os.environ.get("SMTP_PASSWORD", "")
    with smtplib.SMTP_SSL("smtp.yandex.ru", 465) as server:
        server.login(SENDER_EMAIL, smtp_password)
        server.sendmail(SENDER_EMAIL, RECIPIENT_EMAIL, msg.as_string())

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({"success": True}),
    }