class SetRatingAction {
    type = "com.samhorne.mediamonkey5.setrating";
    
    updateAction = (context,settings) => {
      const title = settings.rating;
      plugin.setTitle(context,title)
    }

    onKeyDown = (context, settings) => {
      try{
        const rating = (settings.rating===undefined) ? defaults.rating : settings.rating
        mediamonkey.setRating(rating);
      }catch{
        plugin.showAlert(context);
      }
    };

    onWillAppear = () => {
        updateSetRatingActions();
    }
  }
  
  const updateSetRatingActions = () => {
    contexts.ratingAction.forEach((context) => {
      plugin.getSettings(context);
    });
  };
  

