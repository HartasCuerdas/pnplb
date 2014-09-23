module.exports = function(Week) {

  Week.createNewWeek = function(cb) {

    var y = 2014;
    // month Jan = 0
    var m = 8;
    var d = 20;
    var day = new Date(y, m, d);
    var UTCvalue = day.valueOf();

    Week.create({ "firstDay": UTCvalue }, function(err, weekdata) {
      cb(null, weekdata);
    });

  }

  Week.remoteMethod(
    'createNewWeek',
    {
      returns: {arg: 'weekgreeting', type: 'string'}
    }
  );

};

