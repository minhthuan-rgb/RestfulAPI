using System;
using System.Linq;
using System.Threading.Tasks;

namespace RestfulAPI.Common.DAL
{
    public interface IGenericRep<T> where T : class
    {
        IQueryable<T> GetAllItems { get; }
        T GetItemById(int id);

        Task<Boolean> Create(T t);

        Task<Boolean> Update(T t);

        Task<Boolean> Remove(int id);
    }
}
