class DecreaseRatingAction {
  type = "com.samhorne.mediamonkey5.decreaserating";

  onKeyDown = (context,settings) => {
    try{
      const ratingStep = (settings.ratingStep===undefined) ? defaults.ratingStep : settings.ratingStep
      mediamonkey.decreaseRating(ratingStep);
    }catch{
      plugin.showAlert(context);
    }
  };
}
