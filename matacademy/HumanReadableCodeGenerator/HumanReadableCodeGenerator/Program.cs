using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HumanReadableCodeGenerator
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> list = new List<string>();
            for (int i = 0; i < 1694; i++)          //диапазон   1694
            {
                int _id = i;// Convert.ToInt32(Console.ReadLine());
                string res = Generator(_id);

                Console.WriteLine(res + " " + i);
                list.Add(res);
                //if (res.ToLower()== "zuzuzu")                    Console.WriteLine(i);
            }
            Console.WriteLine();
            var result = list
             .Select(str => new { Name = str, Count = list.Count(s => s == str) })
             .Where(obj => obj.Count > 1)
             .Distinct()
             .ToDictionary(obj => obj.Name, obj => obj.Count);
            foreach (var r in result)
            {
                Console.WriteLine(r.Key);
            }
            Console.WriteLine(result.Count);
        }

        public static string Generator(int id)
        {
            string res;
            var conso = new char[] { 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z' };
            var vocal = new char[] { 'a', 'e', 'i', 'o', 'u' };

            string generatedFromId;


            generatedFromId = conso[id% 22%7%20].ToString() + vocal[id%6%5].ToString() +
                                     conso[id % 21%20].ToString() + vocal[id % 5].ToString() +
                                     conso[id %20].ToString() + vocal[(id) % 5].ToString();

            res = generatedFromId;
            //res = "[]" + DateTime.Now.Day + DateTime.Now.Year + "-" + generatedFromId;

            return res.ToUpper();
            
        }
    }
}
//https://www.warpconduit.net/password-generator/
//  PX002017-KARATE
/*
conso=array('b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','v','w','x','y','z');
vocal=array('a','e','i','o','u');

 */
