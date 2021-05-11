
/*
module.exports.createOrUpdateFaces = function (emp) {
    var query = { EmployeId: emp.EmployeId };
    var update = { EmployeId : emp.EmployeId, $push  : { FacesInfo : { $each : emp.FacesInfo  } } };
    var options = { upsert: true };
    return Employe.findOneAndUpdate(query, update, options);
}

*/

