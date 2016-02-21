namespace todoList.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateTodoIndexes : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.TodoItems", "Todo", c => c.String(maxLength: 800));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.TodoItems", "Todo", c => c.String());
            foreach (string col in new[] { "Todo", "Priority", "DueDate" })
            {
                CreateIndex("dbo.TodoItems", col);
            }
        }
    }
}
