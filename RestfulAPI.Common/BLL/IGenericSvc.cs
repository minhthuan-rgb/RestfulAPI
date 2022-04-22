using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace RestfulAPI.Common.BLL
{
    public interface IGenericSvc <T, C> where T : class where C : class
    {
       IQueryable<T> GetAllItems { get; }

        T GetItemById(int id);

        Boolean Create(C c);

        Boolean Update(C c);

        Boolean Remove(int id);
    }
}
