document.addEventListener("DOMContentLoaded", function() {
    // Obtenir le canvas et le contexte de rendu en 2D
    var canvas = document.getElementById("graph-canvas");
    var context = canvas.getContext("2d");
  
    // Définir le rayon et le centre du cercle
    var radius = canvas.width / 2;
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
  
    // Calculer l'angle correspondant à 70%
    var percentage = 70;
    var angle = (percentage / 100) * 2 * Math.PI;
  
    // Dessiner le cercle extérieur en noir
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.lineWidth = 10;
    context.strokeStyle = "#ff0000";
    context.stroke();
  
    // Dessiner le secteur correspondant à 70% en rouge
    context.beginPath();
    context.arc(
      centerX,
      centerY,
      radius,
      -0.5 * Math.PI,
      (-0.5 + angle) * Math.PI,
      false
    );
    context.lineWidth = 10;
    context.strokeStyle = "#000000";
    context.stroke();
  });
  