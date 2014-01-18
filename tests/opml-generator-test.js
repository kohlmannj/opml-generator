/**
 * Created by azu on 2014/01/18.
 * LICENSE : MIT
 */
var assert = require("power-assert");
var opml = require("../opml-generator");
describe("opml", function () {
    describe("module", function () {
        it("should concat header + outlines", function () {
            var header = {
                "title": "title-text",
                "date": new Date(2014, 2, 9),
                "ownerName": "azu"
            };
            var headerXML = opml.createHeader(header);
            var outlines = [
                {
                    text: "txt",
                    title: "title-text",
                    type: "rss",
                    "xmlUrl": "http://example.com/rss",
                    "htmlUrl": "http://example.com/"
                },
                {
                    text: "txt",
                    title: "title-text",
                    type: "rss",
                    "xmlUrl": "http://example.com/rss",
                    "htmlUrl": "http://example.com/"
                }
            ];
            var outlinesXML = opml.createOutlines(outlines);
            assert.strictEqual(opml(header, outlines), headerXML + outlinesXML);
        });
    });
    describe("header", function () {
        it("should create <head /> string", function () {
            var results = opml.createHeader({
                "title": "title-text",
                "date": new Date(2014, 2, 9),
                "ownerName": "azu"
            });
            assert.strictEqual(results, '<head><title>title-text</title><date>Sat, 08 Mar 2014 15:00:00 GMT</date><ownerName>azu</ownerName></head>')
        });
    });
    describe("outline", function () {
        it("should create <outline /> string", function () {
            var results = opml.createOutlines([
                {
                    text: "txt",
                    title: "title-text",
                    type: "rss",
                    "xmlUrl": "http://example.com/rss",
                    "htmlUrl": "http://example.com/"
                },
                {
                    text: "txt",
                    title: "title-text",
                    type: "rss",
                    "xmlUrl": "http://example.com/rss",
                    "htmlUrl": "http://example.com/"
                }
            ]);
            assert.strictEqual(results, '<outline>' +
                '<outline><text>txt</text><title>title-text</title><type>rss</type><xmlUrl>http://example.com/rss</xmlUrl><htmlUrl>http://example.com/</htmlUrl></outline>' +
                '<outline><text>txt</text><title>title-text</title><type>rss</type><xmlUrl>http://example.com/rss</xmlUrl><htmlUrl>http://example.com/</htmlUrl></outline>' +
                '</outline>')
        });
    });
});