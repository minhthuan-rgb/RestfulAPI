using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestfulAPI.Common.BLL
{
    public interface IGenericSvc <T, C> where T : class where C : class
    {
       IQueryable<T> GetAllItems { get; }

        T GetItemById(int id);

        Task<Boolean> Create(C c);

        Task<Boolean> Update(C c);

        Task<Boolean> Remove(int id);
    }
}
