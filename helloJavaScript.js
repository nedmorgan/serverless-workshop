function main(params) {
  var name = params.name || 'Ned';
  var place = params.place || 'Atlanta';
  var pet = params.pet || 'Walter';
  return {
    payload: 'Hello from ' + name + ' and ' + pet + ' from location: ' + place
  };
}