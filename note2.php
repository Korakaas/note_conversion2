<?php
$notes = array('Do'=>'C', 'Ré' => 'D', 'Mi' => 'E', 'Fa' => 'F', 'Sol' => 'G', 'La' => 'A', 'Si' => 'B');
$result ="";
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    if(empty($_POST['note_classique'])) {
        $result = "<p> Aucune note choisie </p>";
    }
    else{
        $note = $_POST['note_classique'];
        $result = '<p> La notation américaine pour la note \' '.$note.' \' est \' '.$notes[$note].' \'.</p>';
        echo $result;
    }
 
}
if ($_SERVER["REQUEST_METHOD"] == "GET"){
        $form =' <form method="post" action="index.php">
                    <select id="note">
                        <option></option>
                        <option value="0">Do</option>
                        <option value="1">Ré</option>
                        <option value="2">Mi</option>
                        <option value="3">Fa</option>
                        <option value="4">Sol</option>
                        <option value="5">La</option>
                        <option value="6">Si</option>
                    </select>
                </form>';
        echo $form;
    }

?>