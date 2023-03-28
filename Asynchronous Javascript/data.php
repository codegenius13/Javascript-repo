<?php
date_default_timezone_set("America/Los_Angeles");
$time_requested = date('l js \of F Y h:i:s A');
$sleep_time = rand(5, 30);
sleep($sleep_time);
$time_processed = date('l js \of F Y h:i:s A');
$myData->time_requested = $time_requested;
$myData->sleep_time = $sleep_time;
$myData->time_processed = $time_processed;
$myJSON = json_encode($myData);
echo $myJSON
?>