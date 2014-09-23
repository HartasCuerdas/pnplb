module.exports = function(Week) {

  Week.createNewWeek = function(cb) {

    var y = 2014;
    // month Jan = 0
    var m = 8;
    var d = 20;
    var day = new Date(y, m, d);
    var UTCvalue = day.valueOf();

      console.log('err: ' + err);
      console.log('week: ' + week);
    Week.create({ "firstDay": UTCvalue }, function(err, weekdata) {
      cb(null, weekdata);
    });

  }

  Week.remoteMethod(
    'createNewWeek',
    {
      accepts: {arg: 'msg', type: 'string'},
      returns: {arg: 'weekgreeting', type: 'string'}
    }
  );

};

