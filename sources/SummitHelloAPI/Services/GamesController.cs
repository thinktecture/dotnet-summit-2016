using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Services
{
    public class GamesController : ApiController
    {
        private static ConcurrentDictionary<Guid, Game> _gamesDatabase;

        static GamesController()
        {
            _gamesDatabase = new ConcurrentDictionary<Guid, Game>();
            var game = new Game { Id = Guid.NewGuid(), Name = "Monopoly", Description = "Klassiker!" };
            _gamesDatabase.TryAdd(game.Id, game);
        }

        [HttpGet]
        [ActionName("list")]
        public List<Game> GetGames()
        {
            return _gamesDatabase.Values.ToList();
        }

        [HttpPost]
        [ActionName("item")]
        public Game AddNewGame(Game game)
        {
            var id = Guid.NewGuid();
            game.Id = id;
            _gamesDatabase.TryAdd(id, game);

            return game;
        }
    }
}