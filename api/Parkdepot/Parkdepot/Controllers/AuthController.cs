﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Parkdepot.Models.DB;
using Parkdepot.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Parkdepot.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private AuthService authService;

        public AuthController()
        {
            this.authService = new AuthService();
        }

        [HttpPost("login")]
        public async Task<ActionResult<dynamic>> login ([FromBody] ParkdepotUser postedUser)
        {
            ParkdepotUser loggedUser = authService.login(postedUser.Email, postedUser.Pass);

            if (loggedUser == null)
            {
                return BadRequest();
            }

            string userToken = JwtTokenService.GenerateToken(loggedUser);

            //TODO: Add a DTO layer
            var userDTO = new
            {
                Email = loggedUser.Email,
                Username = loggedUser.Username,
                Permission = loggedUser.Permission,
                LandingPage = loggedUser.LandingPage,
                JwtToken = userToken
            };

            return Ok(userDTO);
        }

        [HttpPost("register-user")]
        public IActionResult registerUser([FromBody] ParkdepotUser newUser)
        {
            ParkdepotUser persistedUser = authService.registerUser(newUser);
            string userToken = JwtTokenService.GenerateToken(persistedUser);

            //TODO: Add a DTO layer
            var userDTO = new
            {
                Email = persistedUser.Email,
                Username = persistedUser.Username,
                Permission = persistedUser.Permission,
                JwtToken = userToken
            };

            return Ok(userDTO);
        }
    }
}
