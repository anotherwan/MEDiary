
exports.seed = function(knex, Promise) {

  function getDrId() {
    return knex('doctors')
      .select('id')
      .where('name', 'like', 'D%');
  }

  function getUId() {
    return knex('users')
      .select('id')
      .where('name', 'like', 'Sick%');
  }

  // Deletes ALL existing entries
  return knex('inputs').del()
    .then(function() {
      return knex('users').del()
    }).then(function() {
        return knex('doctors').del()
    //seed doctors table
    }).then(function() {
        return knex('doctors').insert({
          name: 'Dr. McDoctorFace',
          email: 'doctorface@notadoctor.com',
          specialty: 'general practitioner',
          password: 'doctor'
        });
    }).then(function() {
        return knex('users').insert({
          doctor_id: getDrId(),
          name: 'Sick Human',
          email: 'shuman@notarobot.com',
          password: '$2a$10$HoqV4ZXhy.uUt9F1qngGCuW80xnTms1.I0c2LME/vvrghzMSHT7FW', //working pwd is 'sick'
          age: 22,
          gender: 'male',
          weight: 145,
          height: '5ft 10in'
        });
    }).then(function() {
        return knex('inputs').insert({
          user_id: getUId(),
          body_part_id: 10,
          pain_rating: 4,
          description: 'pain in the ass',
          date_created: '2017-02-22'
        });
    });
};
