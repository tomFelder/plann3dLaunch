<?php
/*======================================
=            PHP send email            =
======================================*/
require_once 'vendor/swiftmailer/swiftmailer/lib/swift_required.php';

define('SMTP_USERNAME', 'AKIAIRYIXW3PQ3HGQISQ');
define('SMTP_PASSWORD', 'AoHqDy9drN7ioD/id/u8KhYuRJmN217tOolqhnWJuC4L');
define('SMTP_HOST', 'email-smtp.us-west-2.amazonaws.com');
define('SMTP_PORT', 25);

define('TO_EMAIL', 'info@plann3d.com.au');
define('FROM_EMAIL', 'info@plann3d.com.au');
define('FROM_EMAIL_DISPLAY', 'Plann3d');
define('EMAIL_SUBJECT', 'Plann3d Website Contact Us Form');

$log_data['ip'] = $_SERVER['HTTP_X_REAL_IP'];
$log_data['userAgent'] = $_SERVER["HTTP_USER_AGENT"];
$log_data['post_data'] = $_POST;

if (isset($_POST['comments'])) {

  $transport = Swift_SmtpTransport::newInstance(SMTP_HOST, SMTP_PORT, "tls")
    ->setUsername(SMTP_USERNAME)
    ->setPassword(SMTP_PASSWORD);

  $mailer = Swift_Mailer::newInstance($transport);

  $messageBody = '
    IP: '.$log_data['ip'].'<br />
    User agent: '.$log_data['userAgent'].'<br />
    ContactName: '.$_POST['contactName'].'<br />
    Email: '.$_POST['email'].'<br />
    Comments: '.$_POST['comments'].'<br />
  ';
  $message = Swift_Message::newInstance(EMAIL_SUBJECT)
    ->setFrom(array(FROM_EMAIL => FROM_EMAIL_DISPLAY))
    ->setTo(array(TO_EMAIL))
    ->setBody($messageBody);

  $result = $mailer->send($message);
  if ( $result ) {
    error_log(serialize($log_data)."\n", 3, '_log/contact.log');
  } else {
    error_log(serialize($log_data)."\n", 3, '_log/contact_error.log');
  }

}

/*-----  End of PHP send email  ------*/

?>
