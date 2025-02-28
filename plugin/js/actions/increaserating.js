class IncreaseRatingAction {
  type = "com.samhorne.mediamonkey5.increaserating";

  onKeyDown = (context,settings) => {
    try{
      const ratingStep = (settings.ratingStep===undefined) ? defaults.ratingStep : settings.ratingStep
      mediamonkey.increaseRating(ratingStep);
    }catch{
      plugin.showAlert(context);
    }
  };
}
