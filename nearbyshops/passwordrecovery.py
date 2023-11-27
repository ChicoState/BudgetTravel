import smtplib
import random
from email.message import EmailMessage

def send_email(receiver_email, subject, content):
    # Email setup
    sender_email = "budgettravel823@gmail.com"  
    password = "yixw cqku adkw eilt" 

    # Create the email
    msg = EmailMessage()
    msg.set_content(content)
    msg['Subject'] = subject
    msg['From'] = sender_email
    msg['To'] = receiver_email

    # Connect to the server and send email
    server = smtplib.SMTP_SSL('smtp.gmail.com', 465)  # For Gmail
    server.login(sender_email, password)
    server.send_message(msg)
    server.quit()

def main():
    email = input("Enter your email: ")

    # Generate a random 6-digit number
    random_number = str(random.randint(100000, 999999))
    
    # Send the random number to the provided email
    send_email(email, "Your Verification Code", f"Your verification code is: {random_number}")

    # Get user input
    user_input = input("Enter the 6-digit number sent to your email: ")

    # Validate the user's input
    if user_input == random_number:
        print("It's correct!")
    else:
        print("Incorrect verification code. Please check your email and try again.")

if __name__ == "__main__":
    main()
