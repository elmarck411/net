using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
namespace todoList.Models
{
    public class TodoItem
    {
        public int TodoItemId { get; set; }
        [MaxLength(800)]
        public String Todo { get; set; }
        public byte Priority { get; set; }
        public DateTime? DueDate { get; set; }
    }
}