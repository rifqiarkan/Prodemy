import { expect } from "chai";
import twoStrings from "../twostring.js";

describe('F001 fungsi 2 string terdapat karakter yang sama', function() {

    it('TS001 Terdapat satu huruf sama, menghasilkan nilai YES', function() {
        const result = twoStrings('hebe', 'destria')
        expect(result).to.equal('YES')
    }),

    it('TS002 Terdapat dua huruf sama, menghasilkan nilai YES', function() {
        expect(twoStrings('hebe', 'suksesh')).to.equal('YES')
    }),

    it('TS003 Terdapat satu angka sama, menghasilkan nilai YES', function() {
        expect(twoStrings('12555', '1333')).to.equal('YES')
    }),

    it('TS004 Terdapat special karakter sama dan menghasilkan nilai YES', function() {
        expect(twoStrings('arkan$', '$eles@i')).to.equal('YES')
    }),

    it('TS005 terdapat hanya spasi pbada 2 string, menghasilkan nilai YES', function() {
        expect(twoStrings(' ', ' ')).to.equal('YES')
    })
})

describe('F002 2 string tidak terdapat karakter yang sama', function() {

    it('TS006 tidak terdapat satupun huruf sama, menghasilkan nilai NO', function() {
        expect(twoStrings('arkan', 'hebe')).to.equal('NO')
    }),

    it('TS007tidak terdapat karakter atau blank, menghasilkan nilai NO', function() {
        expect(twoStrings('', '')).to.equal('NO')
    }),

    it('TS008 Terdapat satu huruf sama tetapi kapital dan tidak kapital, menghasilkan nilai NO', function() {
        expect(twoStrings('Arki', 'adung')).to.equal('NO')
     })
     
    it('TS009 seharusnya @ tidak sama dengan a, menghasilkan nilai NO', function() {
        expect(twoStrings('@rk@n', 'ahmad')).to.equal('NO')
    })

    // it('terdapat hanya spasi ada 2 string, menghasilkan nilai YES', function() {
    //     expect(twoStrings(' ', ' ')).to.equal('YES')
    // })

})