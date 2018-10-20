import { pageNormalize } from '../lib/util';

/**
 * Extract the tags of the article
 * @param {*} Vue 
 * @param {*} param1 
 */
const install = (Vue, { router, pages, themeConfig }) => {
    const navs = themeConfig.nav;
    const pagesWithoutLayout = pageNormalize(pages, navs);
    
    const tagMap = {};

    pagesWithoutLayout.forEach(page => {
        if (page.frontmatter && page.frontmatter.tag) {
            const tag = page.frontmatter.tag;
            if (typeof tag === 'string') {
                page.tags = [tag];
                insertTag(tagMap, tag, page.key);
            } else {
                page.tags = tag;
                tag.forEach(t => insertTag(tagMap, t, page.key));
            }
        }
    })

    Vue.mixin({
        computed: {
            $tags() {
                return tagMap;
            }
        }
    });
}

const insertTag = (tagMap, tag, key) => {
    if (!tagMap[tag]) {
        tagMap[tag] = [key];
    } else {
        tagMap[tag].push(key);
    }
}

export default { install };
