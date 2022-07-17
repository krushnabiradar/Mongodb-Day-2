use zen_class
db.createCollection("users")
db.createCollection("codekata")
db.createCollection("attendance")
db.createCollection("topics")
db.createCollection("tasks")
db.createCollection("company_drives")
db.createCollection("mentor")

db.users.insertMany([
    {user_id: 1, name: 'AAA',  batch: 'b01'},
    {user_id: 2, name: 'BBB',  batch: 'b02'},
    {user_id: 3, name: 'CCC',  batch: 'b03'},
    {user_id: 4, name: 'DDD',  batch: 'b01'},
    {user_id: 5, name: 'EEE',  batch: 'b02'},
    {user_id: 6, name: 'FFF',  batch: 'b03'},
    {user_id: 7, name: 'GGG',  batch: 'b01'},
    {user_id: 8, name: 'HHH',  batch: 'b02'},
    {user_id: 9, name: 'III',  batch: 'b03'},
    {user_id: 10, name: 'JJJ',  batch: 'b01'},
    {user_id: 11, name: 'KKK',  batch: 'b02'},
    {user_id: 12, name: 'LLL',  batch: 'b03'},
    {user_id: 13, name: 'AAa',  batch: 'b01'},
    ])

db.users.find();
db.codekata.remove({});
db.codekata.insertMany([
    {user_id: 1, name: 'AAA', problems_solved: 89},
    {user_id: 2, name: 'BBB', problems_solved: 79},
    {user_id: 3, name: 'CCC', problems_solved: 75},
    {user_id: 4, name: 'DDD', problems_solved: 78},
    {user_id: 5, name: 'EEE', problems_solved: 79},
    {user_id: 6, name: 'FFF', problems_solved: 87},
    {user_id: 7, name: 'GGG', problems_solved: 82},
    {user_id: 8, name: 'HHH', problems_solved: 78},
    {user_id: 9, name: 'III', problems_solved: 69},
    {user_id: 10, name: 'JJJ', problems_solved: 79},
    {user_id: 11, name: 'KKK', problems_solved: 69},
    {user_id: 12, name: 'LLL', problems_solved: 90},
    {user_id: 13, name: 'AAa', problems_solved: 89},
    ])
db.codekata.find({});

db.attendance.insertMany([
    {user_id: 1, name: 'AAA', oct_15to30_2020:'Present'},
     {user_id: 2, name: 'BBB', oct_15to30_2020:'Present'},
      {user_id: 3, name: 'CCC', oct_15to30_2020:'Absent'},
      {user_id: 4, name: 'DDD', oct_15to30_2020:'Present'},
        {user_id: 5, name: 'EEE', oct_15to30_2020:'Present'},
         {user_id: 6, name: 'FFF', oct_15to30_2020:'Present'},
          {user_id: 7, name: 'GGG', oct_15to30_2020:'Present'},
          {user_id: 8, name: 'HHH', oct_15to30_2020:'Absent'},
            {user_id: 9, name: 'III', oct_15to30_2020:'Present'},
             {user_id: 10, name: 'JJJ', oct_15to30_2020:'Present'},
              {user_id: 11, name: 'KKK', oct_15to30_2020:'Present'},
              {user_id: 12, name: 'LLL', oct_15to30_2020:'Absent'},
                {user_id: 13, name: 'AAa', oct_15to30_2020:'Present'},
    ])
db.attendance.find();
db.topics.insertOne({
    topic: 'Topic 3',
    month: 'October',
    batch: 'b01'
})
db.topics.find();

db.tasks.find();

db.tasks.insertMany([
    {user_id: '1',name: 'AAa', month: 'October', task_submitted: 'No'},
    {user_id: '2',name: 'BBB',  month: 'November', task_submitted: 'Yes'},
    {user_id: '3',name: 'CCC',  month: 'October', task_submitted: 'Yes'},
    {user_id: '4',name: 'DDD',  month: 'December', task_submitted: 'Yes'},
    {user_id: '5',name: 'EEE',  month: 'October', task_submitted: 'No'},
    {user_id: '6',name: 'FFF',  month: 'November', task_submitted: 'Yes'},
    {user_id: '7',name: 'GGG',  month: 'October', task_submitted: 'Yes'},
    {user_id: '8',name: 'HHH', month: 'December', task_submitted: 'Yes'},
    {user_id: '9',name: 'III',  month: 'November', task_submitted: 'No'},
    {user_id: '10',name: 'JJJ',  month: 'October', task_submitted: 'Yes'},
    {user_id: '11',name: 'KKK',  month: 'December', task_submitted: 'Yes'},
    {user_id: '12',name: 'LLL',  month: 'October', task_submitted: 'Yes'},
    {user_id: '13',name: 'AAA',  month: 'November', task_submitted: 'Yes'},
])
db.tasks.find();

db.mentor.insertMany([
    {mentor_id:1, mentor_name: 'Barbara jenkins', mentees_count: 18},
    {mentor_id:2, mentor_name: 'Andy', mentees_count: 21},
    {mentor_id:3, mentor_name: 'Tasha Halvorson', mentees_count: 20},
    {mentor_id:4, mentor_name: 'Velma Rodriguez', mentees_count: 15},
    {mentor_id:5, mentor_name: 'Mona Greenholt', mentees_count: 16},
    {mentor_id:6, mentor_name: 'Jeff Runolfsson', mentees_count: 25},
    {mentor_id:7, mentor_name: 'Phillip Kling', mentees_count: 21},
    {mentor_id:8, mentor_name: 'Doreen Quigley', mentees_count: 20},
    {mentor_id:9, mentor_name: 'Cathy Stoltenberg', mentees_count: 24},
    {mentor_id:10, mentor_name: 'Jordan Skiles', mentees_count: 25}
    ]);
    db.mentor.find();
    db.company_drives.insertMany([
        {company_name: 'abc ltd', date:'15-oct-2020', appeared_student_name: 'CCC'},
        {company_name: 'cac ltd', date:'17-oct-2020', appeared_student_name: 'BBB'},
        {company_name: 'geuc ltd', date:'19-oct-2020', appeared_student_name: 'JJJ'},
        {company_name: 'dac ltd', date:'21-oct-2020', appeared_student_name: 'III'},
        {company_name: 'hjk ltd', date:'25-oct-2020', appeared_student_name: 'GGG'},
        {company_name: 'yoy ltd', date:'26-oct-2020', appeared_student_name: 'CCC'},
        {company_name: ' ltd', date:'28-oct-2020', appeared_student_name: 'AAA'},
        {company_name: 'abc ltd', date:'3-oct-2020', appeared_student_name: 'FFF'},
        ]);
        db.company_drives.find();
    db.users.distinct("batch")
    db.codekata.aggregate([
        {
            $group: {
              _id: '$problems_solved',
              count: {$sum: 1}
            }
        }])
    
    

        
 db.topics.aggregate([
     {
         $lookup:{
             from:'tasks',
             localField: 'month',
             foreignField: 'month',
             as: 'Topics and tasks in october'
         }
     }
     }])

    
    db.company_drives.aggregate([
        {
            $group: {
                _id: '$date',
                companyDrives: {$min: '$company_name'}
            }
        }])
        db.company_drives.find({date:  {$gte: '15-oct-2020'}},{_id:0,user_id:0,appeared_student_name:0});
        
      db.company_drives.find({company_name: {$not: {$lt: 0}}},{_id:0,user_id:0});
    
     db.codekata.find({problems_solved: {$not: {$lt: 0}}},{_id:0});
      db.mentor.find({mentees_count: {$not: {$lt: 15}}},{_id:0});
db.attendance.aggregate([
    {
        $lookup: {
            from: 'tasks',
            localField: 'name',
            foreignField: 'name',
            as: 'Not yet completed'
        }
    }
    ])   
