using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using lab4._1.Models;

namespace lab4._1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExportsController : ControllerBase
    {
        private readonly MYCONTEXT _context;

        public ExportsController(MYCONTEXT context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Exports>>> GetExports()
        {
            return await _context.Exports.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Exports>> GetExports(int id)
        {
            var exports = await _context.Exports.FindAsync(id);

            if (exports == null)
            {
                return NotFound();
            }

            return exports;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutExports(int id, Exports exports)
        {
            if (id != exports.Id)
            {
                return BadRequest();
            }

            _context.Entry(exports).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExportsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Exports>> PostExports(Exports exports)
        {
            _context.Exports.Add(exports);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ExportsExists(exports.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetExports", new { id = exports.Id }, exports);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Exports>> DeleteExports(int id)
        {
            var exports = await _context.Exports.FindAsync(id);
            if (exports == null)
            {
                return NotFound();
            }

            _context.Exports.Remove(exports);
            await _context.SaveChangesAsync();

            return exports;
        }

        private bool ExportsExists(int id)
        {
            return _context.Exports.Any(e => e.Id == id);
        }
    }
}