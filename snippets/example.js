yourDiv.textContent = "";
var myHpaFeature = require("biojs-vis-hpafeature");
myHpaFeature.init({
  target: yourDiv.id,
  title: 'HPA001012 Normal Tissue immunohistochemistry summary',
  imageUrl: 'http://www.proteinatlas.org/images/1012/ihc_selected_medium.jpg',
  imageTitle: 'Immunohistochemical staining of human lymph node shows strong cytoplasmic positivity in lymphoid cells outside reaction centra',
  notes: ["Lymphoid tissues showed moderate to strong cytoplasmic positivity. Remaining normal cells were generally negative","Two (or more) antibodies yielding similar staining patterns which are consistent with available gene/protein characterization data","Expression summary: Selective cytoplasmic expression in lymphoid cells","Reliable score: High","Validation score: Supportive","67 normal tissues by immunohistochemistry"],
  linkUrl:'http://www.proteinatlas.org/ENSG00000089820/normal',
  linkTitle:'HPA original source',
  width: '585px',
  imageWidth: '150px'
});


