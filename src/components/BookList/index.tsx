import React, { useState, useEffect, useRef } from 'react'
import { List, Card, Input, Select, Flex, Tag, Space, Button, Spin } from 'antd'
import { useTranslation } from 'react-i18next'
import { SearchOutlined, BookOutlined, LoadingOutlined } from '@ant-design/icons'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'

const { Search } = Input
const { Option } = Select

const PAGE_SIZE = 12 // 每页显示数量

interface Book {
  id: number
  title: string
  author: string
  category: string
  description: string
  cover?: string
  rating: number
  country: string
  content?: string
  publishDate?: string
  pages?: number
  wordCount?: number
  tags?: string[]
}

const BookList: React.FC = () => {
  const { t } = useTranslation()
  const [searchText, setSearchText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCountry, setSelectedCountry] = useState('all')
  const [displayCount, setDisplayCount] = useState(PAGE_SIZE)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const loadingRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  // 使用 Intersection Observer 检测加载更多
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoadingMore) {
          handleLoadMore()
        }
      },
      { threshold: 1.0 }
    )

    if (loadingRef.current) {
      observer.observe(loadingRef.current)
    }

    return () => observer.disconnect()
  }, [isLoadingMore, displayCount])

  const handleLoadMore = () => {
    if (filteredBooks.length > displayCount) {
      setIsLoadingMore(true)
      // 模拟加载延迟
      setTimeout(() => {
        setDisplayCount(prev => prev + PAGE_SIZE)
        setIsLoadingMore(false)
      }, 1000)
    }
  }

  const books: Book[] = [
    {
      id: 90005962,
      title: '时光修复师',
      author: '宋仁秀',
      category: 'romance',
      description: '林夏继承顾言的遗志，留在敦煌继续守护这片文化遗产...',
      rating: 4.8,
      country: 'CN',
      content: `

      敦煌的夏天总是来得特别早。

林夏站在莫高窟第45窟前，仰头望着斑驳的壁画。阳光从窟顶的裂缝中漏下来，在斑驳的壁画上投下细碎的光斑。她抬手擦了擦额头的汗，继续记录着壁画的破损情况。

"这里不能用闪光灯。"

一道清冽的男声在身后响起，林夏手一抖，相机差点摔在地上。她慌忙转身，看见一个穿着藏青色工作服的男人站在阴影里。他很高，逆着光看不清面容，只能看见他修长的轮廓。

"对不起，我不知道......"林夏连忙关掉闪光灯，"我是新来的实习生。"

男人走近了些，林夏这才看清他的样子。他生得很好看，却不是那种张扬的俊美，而是像敦煌的壁画一样，带着岁月沉淀的韵味。但他的眼神很冷，像是莫高窟外终年不化的积雪。

"我是顾言，壁画修复组的。"他伸出手，"你是林教授的学生？"

林夏握住他的手，触感冰凉。"是的，我叫林夏。"

"明天早上六点，在这里等我。"顾言说完就转身离开，连一个多余的眼神都没给她。

林夏站在原地，心里泛起一丝不快。她早就听说顾言是这里最厉害的修复师，但没想到这么不近人情。

第二天，林夏准时到达，却发现顾言已经在工作了。他专注地修复着一片壁画，连她走近都没察觉。林夏站在他身后，看着他修长的手指在壁画上轻轻移动，像是在抚摸情人的脸庞。

"看够了吗？"顾言突然开口，把林夏吓了一跳。

"对不起......"

"如果你只是来看热闹的，现在就可以走了。"顾言头也不回地说。

林夏咬了咬嘴唇，强压下心里的委屈。"我是来学习的。"

顾言终于转过身，冷冷地打量着她。"学习？你知道这些壁画有多珍贵吗？它们经不起任何失误。"

"我会小心的。"林夏挺直了背。

顾言看了她一会儿，终于让开了位置。"那就证明给我看。"

日子一天天过去，林夏渐渐习惯了顾言的苛刻。他总是要求完美，稍有差错就会让她重做。林夏常常累得腰酸背痛，却不敢有丝毫怨言。

直到有一天，她在食堂听见几个当地工作人员的对话。

"那个顾言，又在折磨新来的小姑娘了。"

"可不是吗，听说昨天又让人家重做了三遍。"

"他是不是心理有问题啊？整天板着张脸，跟谁欠他钱似的。"

"谁知道呢，听说他以前在城里混得不错，不知道为什么要来这种地方。"

林夏握着筷子的手微微发抖。她突然想起顾言身上总是带着的药香，还有他偶尔露出的疲惫神情。难道他真的有什么不可告人的秘密？

那天下午，林夏心不在焉，不小心碰倒了一瓶修复用的颜料。

"你在干什么？"顾言的声音冷得像冰。

林夏慌忙去捡，却被顾言一把拉住。"别动！"

他的力道很大，林夏的手腕立刻红了一圈。她抬头瞪着他，眼里含着泪光。"你凭什么这么对我？"

顾言愣了一下，松开手。"对不起，我......"

"我知道你不喜欢我，"林夏打断他，"但你能不能至少尊重我一下？"

顾言张了张嘴，似乎想说什么，却突然剧烈地咳嗽起来。他转过身，肩膀剧烈地抖动着。

林夏看见他捂住嘴的手帕上沾着血迹，心里一惊。"你......"

"我没事。"顾言迅速收起手帕，"你先回去吧，今天不用来了。"

林夏站在原地，看着顾言摇摇晃晃地离开。她突然想起那些流言，心里涌起一股说不清的情绪。

那天晚上，林夏辗转难眠。她想起顾言教她修复技巧时的耐心，想起他讲解壁画历史时的温柔，想起他偶尔露出的微笑......那些冷漠，那些苛刻，难道都是假象？

第二天，林夏早早来到莫高窟。她看见顾言站在壁画前，手里握着一支画笔，却迟迟没有落下。他的背影显得那么孤独，仿佛与整个世界隔绝。

"顾言......"林夏轻声唤他。

顾言转过身，脸色苍白得吓人。他勉强笑了笑，"你怎么来了？"

林夏走近他，闻到他身上浓重的药香。"你生病了，为什么不告诉我？"

顾言摇摇头，"小毛病，不碍事。"

"你骗人！"林夏突然哭了出来，"我都看见了，你咳血了......"

顾言愣住了。他伸出手，似乎想擦去她的眼泪，却又缩了回去。"对不起......"

"为什么要道歉？"林夏抓住他的手，"为什么要一个人承受？"

顾言看着她，眼里闪过一丝痛苦。"我不想连累任何人......"

"你太自私了！"林夏扑进他怀里，"你以为这样就是为我好吗？"

顾言的身体僵了一下，随即轻轻抱住她。"对不起......"

从那天起，林夏知道了真相。顾言早就知道自己身患绝症，却选择来到敦煌，用最后的时光守护这片他深爱的土地。

"你知道吗？"有一天，顾言对她说，"这些壁画就像时光的见证。一千年前的人在这里留下了他们的故事，现在轮到我们了。"

林夏靠在他肩上，看着阳光在壁画上移动。"我们的故事也会被记住吗？"

"会的。"顾言轻声说，"只要你还记得。"

然而，好景不长。一天，林夏无意中听到顾言和医生的通话。

"最多还有三个月。"医生的声音从电话那头传来，"你必须住院治疗。"

顾言沉默了一会儿，"我知道了。"

林夏站在门外，心如刀绞。她推开门，看见顾言正望着窗外的莫高窟发呆。

"为什么不告诉我？"她哽咽着问。

顾言转过身，勉强笑了笑，"我不想让你担心。"

"可我想陪着你，"林夏抓住他的手，"不管还剩多少时间。"

顾言看着她，眼里满是心疼。"对不起......"

那天晚上，林夏做了一个梦。梦见自己变成了壁画上的飞天，和顾言一起在敦煌的天空中翱翔。醒来时，她的枕头是湿的。

第二天，顾言的身体状况急转直下。他躺在病床上，握着林夏的手，眼里满是不舍。

"答应我，"他的声音越来越微弱，"继续守护这里......"

林夏紧紧抱住他，感觉他的体温在一点点流逝。窟顶的阳光依然灿烂，壁画上的飞天依然在微笑，仿佛什么都没有改变。

顾言闭上眼睛的时候，嘴角还带着笑。他的手里还握着修复用的画笔，就像握着整个敦煌的时光。

林夏抱着他，看着阳光在壁画上移动。她知道，从今以后，这片土地就是他们的永恒。
    `,
    publishDate: '2008-01-01',
    pages: 400,
    wordCount: 300000,
    tags: ['科幻', '硬科幻', '三体文明', '黑暗森林']
    },
    {
      id: 1,
      title: '三体',
      author: '刘慈欣',
      category: 'science_fiction',
      description: '地球文明向宇宙发出的第一声啼鸣，以及它的回应...',
      rating: 4.8,
      country: 'CN',
      content: `
      第一章：科学边界
      
      叶文洁仍然记得那个世界，那是一个物理学的黄金时代，在那里，每个人都在谈论相对论、量子力学和宇宙的终极奥秘。但是，文化大革命的到来，打破了这一切。

      在那个特殊的年代，她成为了红岸基地的一名科研人员。这个隐藏在深山中的神秘基地，表面上是为了研究太阳活动，实际上却肩负着一个更为重要的使命：向宇宙发出地球文明的第一声啼鸣。

      没有人知道这声啼鸣会带来什么样的回应，也没有人预料到，这个简单的举动会给人类文明带来如此巨大的冲击...
    `,
    publishDate: '2008-01-01',
    pages: 400,
    wordCount: 300000,
    tags: ['科幻', '硬科幻', '三体文明', '黑暗森林']
    },
    {
      id: 2,
      title: '活着',
      author: '余华',
      category: 'literature',
      description: '生命的意义在于承受，活着的意义在于活着本身...',
      rating: 4.9,
      country: 'CN',
      content: `
      第一章：人生
      
      我比现在年轻十岁的时候，获得了一个游手好闲的职业，去乡间收集民间歌谣。那一年的整个夏天，我如同一只乱飞的麻雀，游荡在知青返城后显得空荡荡的村庄里。

      我遇到了一个名叫福贵的老人，他给我讲述了他年轻时的故事。那是一个充满苦难的故事，但福贵说他现在很满足，能够活着就是最大的幸福...
    `,
    publishDate: '1993-05-01',
    pages: 226,
    wordCount: 130000,
    tags: ['文学', '当代文学', '人性', '生命']
    },
    {
      id: 3,
      title: '百年孤独',
      author: '加西亚·马尔克斯',
      category: 'literature',
      description: '一个家族七代人的故事，一个世纪的拉美史诗...',
      rating: 4.7,
      country: 'CO',
      content: `
      许多年后，面对行刑队，奥雷里亚诺·布恩迪亚上校将会回想起父亲带他去见识冰块的那个遥远的下午。

      当时，马孔多是个二十户人家的村庄，一座座土房都盖在河岸上，河水清澈，沿着遍布石头的河床流去，河里的石头光滑而巨大，白得像史前的巨蛋...
    `,
    publishDate: '1967-05-30',
    pages: 360,
    wordCount: 150000,
    tags: ['魔幻现实主义', '拉美文学', '家族史诗']
    },
    {
      id: 4,
      title: '1984',
      author: '乔治·奥威尔',
      category: 'dystopian',
      description: '极权主义社会的预言之作，令人深思的政治寓言...',
      rating: 4.8,
      country: 'UK',
      content: `
      那是一个明媚的寒冷的四月天，钟正敲着十三点。温斯顿·史密斯为了躲避刺骨的风，下巴紧贴胸膛，快步走过胜利大厦的玻璃门...
    `,
    publishDate: '1949-06-08',
    pages: 328,
    wordCount: 89000,
    tags: ['反乌托邦', '政治寓言', '极权主义']
    },
    {
      id: 5,
      title: '杀死一只知更鸟',
      author: '哈珀·李',
      category: 'classic',
      description: '成长与正义，人性的光辉与黑暗...',
      rating: 4.7,
      country: 'US',
      content: `
      当他快要上六年级的时候，杰姆断了胳膊。等到它痊愈，他对这次受伤的担心已经大大减轻了...
    `,
    publishDate: '1960-07-11',
    pages: 281,
    wordCount: 100000,
    tags: ['成长', '种族', '正义', '人性']
    },
    {
      id: 6,
      title: '挪威的森林',
      author: '村上春树',
      category: 'romance',
      description: '青春、爱情与生死的优美故事...',
      rating: 4.6,
      country: 'JP',
      content: `
      我在想起这件事的时候，总是听到Beatles的Norwegian Wood这首歌。现在听到这首歌的时候，就会联想起遥远的一个秋天的黄昏...
    `,
    publishDate: '1987-09-04',
    pages: 386,
    wordCount: 130000,
    tags: ['青春', '爱情', '孤独', '成长']
    },
    {
      id: 7,
      title: '人类简史',
      author: '尤瓦尔·赫拉利',
      category: 'history',
      description: '从认知革命到人工智能，跨越十万年的人类发展史诗...',
      rating: 4.8,
      country: 'IL',
      content: `
      大约在13.5万年前，物质和能量开始以复杂的结构（称为原子）的形式凝聚在一起...
    `,
    publishDate: '2011-01-01',
    pages: 440,
    wordCount: 180000,
    tags: ['历史', '人类学', '科普', '文明']
    },
    {
      id: 8,
      title: '追风筝的人',
      author: '卡勒德·胡赛尼',
      category: 'drama',
      description: '关于救赎与重生的动人故事...',
      rating: 4.8,
      country: 'AF',
      content: `
        我记得那是1975年的一个寒冷、多云的冬日。那年我12岁。我蹲在结冰的小溪旁一堵倒塌的泥墙后面，偷偷窥视着发生的一切...
      `,
      publishDate: '2003-05-29',
      pages: 368,
      wordCount: 120000,
      tags: ['救赎', '友情', '阿富汗', '成长']
    },
    {
      id: 9,
      title: '白夜行',
      author: '东野圭吾',
      category: 'mystery',
      description: '一部令人窒息的绝望纯爱故事...',
      rating: 4.7,
      country: 'JP',
      content: `
        1973年，大阪的一栋废弃建筑内发现了一具男尸。死者是一名从事不法行业的男子，而他的死亡注定将一对少年男女的命运永远改变...
      `,
      publishDate: '1999-03-15',
      pages: 548,
      wordCount: 250000,
      tags: ['悬疑', '推理', '爱情', '黑暗']
    },
    {
      id: 10,
      title: '围城',
      author: '钱钟书',
      category: 'satire',
      description: '字字珠玑的婚姻生活讽刺小说...',
      rating: 4.6,
      country: 'CN',
      content: `
        方鸿渐在欧洲求学回来，带着一个博士学位的桂冠，仿佛荷马史诗里的人物，戴着一顶用常青藤编织的花环...
      `,
      publishDate: '1947-03-01',
      pages: 362,
      wordCount: 180000,
      tags: ['讽刺', '婚姻', '知识分子', '人性']
    },
    {
      id: 11,
      title: '霍乱时期的爱情',
      author: '加西亚·马尔克斯',
      category: 'romance',
      description: '跨越半个世纪的爱情故事...',
      rating: 4.7,
      country: 'CO',
      content: `
        在他们相识的五十一年九个月零四天里，弗洛伦蒂诺·阿里萨一直忠贞不渝地爱着费尔明娜·达萨...
      `,
      publishDate: '1985-12-08',
      pages: 348,
      wordCount: 160000,
      tags: ['爱情', '拉美文学', '魔幻现实主义']
    },
    {
      id: 12,
      title: '沙丘',
      author: '弗兰克·赫伯特',
      category: 'science_fiction',
      description: '科幻文学的里程碑之作...',
      rating: 4.8,
      country: 'US',
      content: `
        厄拉科斯星球，也被称为"沙丘"。这颗星球表面完全被沙漠覆盖，是整个已知宇宙中香料的唯一来源...
      `,
      publishDate: '1965-08-01',
      pages: 412,
      wordCount: 188000,
      tags: ['科幻', '政治', '生态', '哲学']
    }
  ]

  const categories = [
    { value: 'all', label: t('booklist.all') },
    { value: 'literature', label: t('booklist.literature') },
    { value: 'science_fiction', label: t('booklist.science_fiction') },
    { value: 'mystery', label: t('booklist.mystery') },
    { value: 'romance', label: t('booklist.romance') },
    { value: 'classic', label: t('booklist.classic') },
    { value: 'history', label: t('booklist.history') },
    { value: 'drama', label: t('booklist.drama') },
    { value: 'dystopian', label: t('booklist.dystopian') },
    { value: 'satire', label: t('booklist.satire') }
  ]

  const countries = [
    { value: 'all', label: t('booklist.all_countries') },
    { value: 'CN', label: t('booklist.country_cn') },
    { value: 'US', label: t('booklist.country_us') },
    { value: 'UK', label: t('booklist.country_uk') },
    { value: 'JP', label: t('booklist.country_jp') },
    { value: 'CO', label: t('booklist.country_co') },
    { value: 'IL', label: t('booklist.country_il') },
    { value: 'AF', label: t('booklist.country_af') }
  ]

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(searchText.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory
    const matchesCountry = selectedCountry === 'all' || book.country === selectedCountry
    return matchesSearch && matchesCategory && matchesCountry
  })

  // 重置显示数量
  useEffect(() => {
    setDisplayCount(PAGE_SIZE)
    setIsLoadingMore(false)
  }, [searchText, selectedCategory, selectedCountry])

  const loadingElement = (
    filteredBooks.length > displayCount && (
      <div 
        ref={loadingRef}
        style={{ 
          textAlign: 'center', 
          marginTop: 16, 
          height: 32,
          visibility: isLoadingMore ? 'visible' : 'hidden' 
        }}
      >
        <Spin 
          indicator={
            <LoadingOutlined style={{ fontSize: 24, color: '#1890ff' }} spin />
          }
        />
      </div>
    )
  )

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <Flex gap="middle">
          <Search
            placeholder={t('booklist.search_placeholder')}
            allowClear
            onChange={(e) => setSearchText(e.target.value)}
            prefix={<SearchOutlined />}
            size="large"
          />
          <Select
            defaultValue="all"
            style={{ width: 120 }}
            onChange={setSelectedCategory}
            size="large"
          >
            {categories.map((category) => (
              <Option key={category.value} value={category.value}>
                {category.label}
              </Option>
            ))}
          </Select>
          <Select
            defaultValue="all"
            style={{ width: 120 }}
            onChange={setSelectedCountry}
            size="large"
          >
            {countries.map((country) => (
              <Option key={country.value} value={country.value}>
                {country.label}
              </Option>
            ))}
          </Select>
        </Flex>
      </div>

      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={filteredBooks.slice(0, displayCount)}
        loadMore={loadingElement}
        renderItem={(book) => (
          <List.Item>
            <Card
              hoverable
              onClick={() => navigate(`/books/${book.id}`, { 
                state: book  // 通过 state 传递完整的书籍数据
              })}
              cover={
                book.cover ? (
                  <img alt={book.title} src={book.cover} className={styles.bookCover} />
                ) : (
                  <div className={styles.placeholder}>
                    <BookOutlined style={{ fontSize: 32, color: '#999' }} />
                  </div>
                )
              }
            >
              <Card.Meta
                title={book.title}
                description={
                  <>
                    <div className={styles.author}>{book.author}</div>
                    <div className={styles.tags}>
                      <Space>
                        <Tag color="blue">{t(`booklist.${book.category}`)}</Tag>
                        <Tag color="gold">{book.rating}</Tag>
                      </Space>
                    </div>
                    <div className={styles.description}>{book.description}</div>
                  </>
                }
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  )
}

export default BookList 