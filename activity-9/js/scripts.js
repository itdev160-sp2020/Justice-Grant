$(function() {
    var data = [
        {
            id: 1,
            title: 'lostFeeling',
            body: 'the distinct feeling of something absolute, but impervious in form',
            author: 'Musa O.'
        },
        {
            id: 2,
            title: 'domicile',
            body: 'we walk, we converse, expressing change, finding warmth, with solace unknown and the heart used as domicile, these emotions uncertain, but undeniable.',
            author: 'Grant J.'
        },
        {
            id: 3,
            title: 'pass',
            body: 'as the petals fall and the sweet taste of time envelopes you, realization breeds for disaster in sea of true.',
            author: 'Jahlen G.'
        },
        {
            id: 4,
            title: 'key',
            body: 'and just like that, two souls interlock, memories of false memories, make us wonder, explore ourselves, searching for what if.',
            author: 'Musa'
        },
        {
            id: 5,
            title: 'formless',
            body: 'a state of limerence, as the blossoms of cherry paint your face, and I find myself deep within your eyes.',
            author: 'Omusa'
        }
    ];

    var $nav = $('#nav-container');
    var $intro = $('#intro');
    var $posts = $('#post-container');

    function initPosts() {
        for (let i=0; i<data.length; i++) {

            var postId = 'post-' + data[i].id,
                $post = $('<section class="post"></section>'),
                $title = $('<h2 class="title></h2>'),
                $body = $('<blockquote></blockquote>'),
                $author = $('<span class="title></span>'),
                $navItem = $('<li></li>');

                $title.text(data[i].title);
                $body.text(data[i].body);
                $author.text(data[i].author);

                $navItem.attr('id', data[i].id);
                $navItem.text(data[i].title);

                $post.attr('id', postId);
                $post.append($title);
                $post.append($body);
                $post.append($author);

                $posts.append($post);
                $navItem.append($navItem);

                $navItem.on('click', function() {
                    var id = $(this).attr('id');
                    $posts.children().hide;
                    $posts.find('#post-' + id).fadeIn();
                });

                $posts.children('.post').hide();
                $intro.fadeIn(1000);
        }
        
    }

    initPosts();
});