from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 587
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USERNAME"] = os.getenv("MAIL_USERNAME")
app.config["MAIL_PASSWORD"] = os.getenv("MAIL_PASSWORD")
app.config["MAIL_DEFAULT_SENDER"] = os.getenv("MAIL_DEFAULT_SENDER")
app.config["MAIL_USE_TLS"] = False
app.config["MAIL_USE_SSL"] = True
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
mail = Mail(app)
CORS(app, resources={r"/send-email": {"origins": "http://localhost:3000"}})


@app.route("/")
def index():
    return "Hello, Flask!"


@app.route("/send-email", methods=["POST"])
def send_email():
    data = request.get_json()

    name = data.get("name")
    surname = data.get("surname")
    email = data.get("email")
    phone = data.get("phone")
    course = data.get("course")

    msg = Message(
        "Nowa wiadomość od klienta",
        recipients=["kontakt.akademiamaturzysty@gmail.com"],
    )

    msg.body = f"""
    Imię: {name}
    Nazwisko: {surname}
    Email: {email}
    Numer telefonu: {phone}
    Kurs: {course}
    """

    try:
        mail.send(msg)
        return jsonify({"message": "Email successfully sent."}), 200
    except Exception as e:
        return (
            jsonify({"message": "Email not sent successfully.", "error": str(e)}),
            500,
        )


if __name__ == "__main__":
    app.run(debug=True)
