<?php
  $indexFile = __DIR__ . '/build/index.html';

  if (file_exists($indexFile)) {
    echo file_get_contents($indexFile);
  } else {
    echo "Erreur : Le fichier index.html n'a pas été trouvé.";
  }
?>