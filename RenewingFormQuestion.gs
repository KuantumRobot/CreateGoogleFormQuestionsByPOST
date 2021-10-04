function doPost(e) {
  const noDelete1="#######"; //Avoid deleting section title(if needed). Input question ID.
  const noDelete2="#######"; //Avoid deleting default question(if needed). Input question ID.
  const formid="##################"; //Your form's id

  let form = FormApp.openById(formid);
  let existingQs = form.getItems();
  let param = e.parameters.questions;

  // Build regex validation(12 digits)
  let textValidation = FormApp.createTextValidation()
  .setHelpText('12 digits only')
  .requireTextMatchesPattern("\\d{12}")
  .build();

  // Delete existing questions except for noDelete1 & 2
  for(let q of existingQs){
    qid=q.getId()
    if(qid != noDelete1 & qid != noDelete2){
      form.deleteItem(q);
    }
  };
  
  // Add questions based on POSTed params while adding validation
  for (let l of param){
    form.addTextItem().setTitle(l).setValidation(textValidation)
  }


}
