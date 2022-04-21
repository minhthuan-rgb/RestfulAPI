using System;
using System.Linq;

namespace RestfulAPI.Common.DAL
{
    public interface IGenericRep<T> where T : class
    {
        IQueryable<T> GetAllItems { get; }
        T GetItemById(int id);

        Boolean Create(T t);

        Boolean Update(T t);

        Boolean Remove(int id);
    }
}
