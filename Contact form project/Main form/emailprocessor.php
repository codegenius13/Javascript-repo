<?php
if (isset ($_POST['name'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $comment = $_POST['comment'];

    if (!empty($name) && !empty($email) && empty($comment)) {
        $re_email = "/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/";
        if (preg match($re_email, $email)) {
            $message = "Name: $name,
            Email: $email,
            Comment: $comment";
            // actually sending mail is commented out to prevent span
            Send mail($email, $message);
            $myData->result = "success";
            $myJSON = json_encode($myData);
            echo $myJSON;
        }
        else {
            $myData->result = "emailfail";
            $myJSON = json_encode($myData);
            echo $myJSON;
        }
    }
    else {
        $myData->result = "fieldfail";
        $myJSON = json_encode($myData);
        echo $myJSON;
    }
}
function send_mail($email, $message) {
    $to = "ikuerowob@gmail.com";
    $from = $email;
    $subject = "Mail from webform on your website";
    $headers = "From: {$email}" . "\r\n" . 'Reply-To:' . $email . "\r\n" . 'X-Mailer: PHP/' . phpversion();
    // actually send mail on PHP
    mail($to, $subject, $message, $headers);
}
?>