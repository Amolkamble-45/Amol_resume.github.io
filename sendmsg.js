


function sendEmail() {
// fetching data from form

    var Name = document.getElementById('Name');
    var Name = Name.value;
    console.log(Name)

    var phone_email = document.getElementById('phone_email');
    var phone_email = phone_email.value;
    console.log(phone_email)

    var Message = document.getElementById('Message');
    var Message = Message.value;
    console.log(Message)


    const recipient = 'amolk6628@gmail.com';
    const subject = 'Hello from '+Name;
    const body = Message;

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }




