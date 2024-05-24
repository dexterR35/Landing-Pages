var dummyData = [
    { username: 'user1', status: 0 },
    { username: 'user2', status: 1 },
    { username: 'user3', status: 0 },
    { username: 'user4', status: 1 },
    { username: 'user5', status: 0 },
    { username: 'user6', status: 1 },
    { username: 'user7', status: 0 },
    { username: 'user8', status: 1 },
    { username: 'user9', status: 0 },
    { username: 'user10', status: 1 }
  ];
           
new DataTable('#exampleS', {
                data: dummyData,
                columns: [
                  {
                    title: 'Username',
                    data: 'username'
                  },
                  {
                    title: 'Status',
                    data: 'status',
                    render: function (data, type, row, meta) {
                      return data === 0 ?
                        '<img src="thumb-up.png" class="thumb-icon" alt="Thumb Up">' :
                        '<img src="thumb-down.png" class="thumb-icon" alt="Thumb Down">';
                    }
                  }
                ],
                paging: true,
                info: true,
                lengthChange: false,
                aaSorting: false,
                responsive: true,
                pageLength: 30,
                paginate: true,
                searching: false,
                order: [
                  [0, 'asc']
                ]
              });