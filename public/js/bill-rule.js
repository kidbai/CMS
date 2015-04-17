$(function (){
   $("#bill-rule").dataTable();
   console.log($("[data-target=#billRuleModal]")); 
   $("[data-target=#billRuleModal]").click(function (){
        console.log($(this).parent().siblings('th:eq(0)').text()); 
        var bill_name = $(this).parent().siblings('th:eq(0)').text();
        var bill_rule = $(this).parent().siblings('th:eq(1)').text();
        $("#billRuleModal").find('input:eq(0)').val(bill_name);
        $("#billRuleModal").find('input:eq(1)').val(bill_rule);
   });
});