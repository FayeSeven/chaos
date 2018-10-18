/**
 * Created by 熙冰 on 2018/10/18
 */
let http = require('http');
let url = 'http://www.imooc.com/learn/348';

//cnpm install cheerio
let cheerio = require('cheerio');

function filterChapters(html) {
    let $ = cheerio.load(html);
    let chapters = $('.chapter');

    /*[{
        chapterTitle: '',
        videos: [
            title: '',
            id:''
        ]
    }]*/

    let courseData = [];
    chapters.each(function (item) {
        let chapter = $(this);
        let chapterTitle = chapter.find('h3').text().trim();
        let videos = chapter.find('.video').children('li');
        let chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        };

        videos.each(function (item) {
            let video = $(this).find('.J-media-item');
            let videoTitle = video.text().trim();
            let id = video.attr('href').split('video/')[1];

            chapterData.videos.push({
                title: videoTitle,
                id: id
            })
        });

        courseData.push(chapterData);
    });
    return courseData;
}

function printCourseInfo(courseData) {
    console.log(courseData);
    courseData.forEach(function (item) {
        let chapterTitle = item.chapterTitle;
        console.log(chapterTitle + '\n');

        item.videos.forEach(function (video) {
            console.log(' 【' + video.id + '】' + video.title + '\n');
        })
    })
}

//爬虫网页
http.get(url, function (res) {
    let html = '';

    res.on('data', function (data) {
        html += data;
    });

    res.on('end', function () {
        //爬虫整个html
        //console.log(html);

        let courseData = filterChapters(html);
        printCourseInfo(courseData);
    });
}).on('error', function () {
    console.log('获取课程数据出错！');
});
