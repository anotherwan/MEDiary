
exports.seed = function(knex, Promise) {

  function getDrId() {
    return knex('doctors')
      .select('id')
      .where('name', 'like', 'James%');
  }

  function getUId() {
    return knex('users')
      .select('id')
      .where('name', 'like', 'Jacen%');
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
          name: 'James Moriarty',
          email: 'james.moriarty@notadoctor.com',
          specialty: 'general practitioner',
          password: 'doctor'
        });
    }).then(function() {
        return knex('users').insert({
          doctor_id: getDrId(),
          name: 'Jacen Solo',
          email: 'jsolo@example.com',
          password: '$2a$10$HoqV4ZXhy.uUt9F1qngGCuW80xnTms1.I0c2LME/vvrghzMSHT7FW', //working pwd is 'sick'
          age: 22,
          gender: 'male',
          weight: 145,
          height_feet: '5',
          height_inches: '7',
          allergies: 'peanuts',
          medication: 'aspirin',
          conditions: 'frequent blood clots'
        });
    }).then(function() {
        return knex('inputs').insert({
          user_id: getUId(),
          body_part_id: '2a',
          pain_rating: 4,
          title: 'back pain',
          description: 'Frequent muscle cramps in the upper back between shoulders',
          date_created: '2017-02-22'
        });
    }).then(function() {
        return knex('inputs').insert({
          user_id: getUId(),
          body_part_id: '3b',
          pain_rating: 3,
          title: 'elbow pain',
          description: 'Feeling some tension around the elbow when straightening left arm.',
          date_created: '2017-03-01'
        });
    }).then(function() {
        return knex('inputs').insert({
          user_id: getUId(),
          body_part_id: '1a',
          pain_rating: 5,
          title: 'headache',
          description: 'Very intense migraine that lasted all day.',
          date_created: '2017-01-20'
        });
    })
};
