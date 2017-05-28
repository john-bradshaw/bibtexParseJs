import test from 'ava';

const bibtexParse = require('../bibtexParse');


/* simple and dumm test to checkl that it sorts by author correctly */


bibtexParse.clear();
bibtexParse.addBibtex(`

@inproceedings{marchant2012bayesian,
title={Bayesian optimisation for intelligent environmental monitoring},
    author={Marchant, Roman and Ramos, Fabio},
    booktitle={Intelligent Robots and Systems (IROS), 2012 IEEE/RSJ International Conference on},
    pages={2242--2249},
    year={2012},
    organization={IEEE}
}

@inproceedings{kandasamy2015high,
  title={High dimensional Bayesian optimisation and bandits via additive models},
  author={Kandasamy, Kirthevasan and Schneider, Jeff and P{\'o}czos, Barnab{\'a}s},
  booktitle={International Conference on Machine Learning},
  pages={295--304},
  year={2015}
}

@inproceedings{pelikan1999boa,
  title={BOA: The Bayesian optimization algorithm},
  author={Pelikan, Martin and Goldberg, David E and Cant{\'u}-Paz, Erick},
  booktitle={Proceedings of the 1st Annual Conference on Genetic and Evolutionary Computation-Volume 1},
  pages={525--532},
  year={1999},
  organization={Morgan Kaufmann Publishers Inc.}
}
`);



const expected = [ { citationKey: 'kandasamy2015high',
    entryType: 'inproceedings',
    entryTags:
        { title: 'High dimensional Bayesian optimisation and bandits via additive models',
            author: 'Kandasamy, Kirthevasan and Schneider, Jeff and P{\'o}czos, Barnab{\'a}s',
            booktitle: 'International Conference on Machine Learning',
            pages: '295--304',
            year: '2015' } },
    { citationKey: 'marchant2012bayesian',
        entryType: 'inproceedings',
        entryTags:
            { title: 'Bayesian optimisation for intelligent environmental monitoring',
                author: 'Marchant, Roman and Ramos, Fabio',
                booktitle: 'Intelligent Robots and Systems (IROS), 2012 IEEE/RSJ International Conference on',
                pages: '2242--2249',
                year: '2012',
                organization: 'IEEE' } },
    { citationKey: 'pelikan1999boa',
        entryType: 'inproceedings',
        entryTags:
            { title: 'BOA: The Bayesian optimization algorithm',
                author: 'Pelikan, Martin and Goldberg, David E and Cant{\'u}-Paz, Erick',
                booktitle: 'Proceedings of the 1st Annual Conference on Genetic and Evolutionary Computation-Volume 1',
                pages: '525--532',
                year: '1999',
                organization: 'Morgan Kaufmann Publishers Inc.' } } ];

bibtexParse.sortAlphabetically();

let entries = bibtexParse.getEntries();
test('author alphabetical test', t => t.deepEqual(entries, expected));

