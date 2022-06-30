<?php
	header('Access-Control-Allow-Origin: http://localhost:3000/');
	$firstNumber = $_POST['firstNumber'];
	$secondNumber = $_POST['secondNumber'];
	$operation = $_POST['operation'];
	/*
	echo ("FirstNumber : $firstNumber");
	echo ("SecondNumber: $secondNumber");
	echo ("Operation: $operation");*/

	if($operation == 'addition'){
        $result = $firstNumber + $secondNumber;
		$result = number_format($result,2);
		echo("Result of addition is: $result");
    }
    if($operation == 'subtraction'){
        $result = $firstNumber - $secondNumber;
        $result = number_format($result,2);
        echo("Result of Subtraction is: $result");
    }
    if($operation == 'multiplication'){
        $result = $firstNumber * $secondNumber;
		$result = number_format($result,2);
        echo("Result of multiplication is: $result"); 
    }
    if($operation == 'division'){
        $result = $firstNumber / $secondNumber;
		$result = number_format($result,2);
        echo("Result of division is: $result");
    }
    
?>

			
