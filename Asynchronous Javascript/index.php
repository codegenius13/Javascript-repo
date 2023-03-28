<?php
date_default_timezone_set("America/Los_Angeles");
$time_requested = date('l js \of F Y h:i:s A');
$sleep_time = rand(5, 30);
sleep($sleep_time);
$time_processed = date('l js \of F Y h:i:s A');
echo "<div class=\"serverdata\">
<h2>$sleep_time Seconds</h2>
<p>Data requested on $time_requested</p>
<p>Data processed on $time_processed</p>
</div>"
?>