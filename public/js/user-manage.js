var editor;

$(function (){
    console.log($('#user-manage'));
    editor = new $.fn.dataTable.Editor({
        ajax:  "",
        table: '#user-manage',
        fields: [
            { label: '用户名称', name: 'username' },
            { label: '联系方式',  name: 'contact'  },
            { label: '地址',  name: 'address'  },
            { label: '注册时间',  name: 'registration-date'  },
            { label: '权限等级',
              name: 'limit',
              type: 'select',
              options:[
                    { label: 'level 1', value : 0 },
                    { label: 'level 2', value : 1 },
                    { label: 'level 3', value : 2 }
              ]
            },
            // etc
        ]
    });

    $("#user-manage").DataTable({
        ajax: '',
        dom:  'Tfrtip',
        columns: [
            { data: 'username' },
            { data: 'contact' },
            { data: 'address' },
            { data: 'registration-date' },
            { data: 'limit', className: 'center'},
            // etc
        ],
        tableTools: {
            sRowSelect: 'os',
            aButtons: [
                { sExtends: 'editor_create', editor: editor },
                { sExtends: 'editor_edit',   editor: editor },
                { sExtends: 'editor_remove', editor: editor }
            ]
        }
    });
});