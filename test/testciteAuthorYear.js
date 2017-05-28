import test from 'ava';

const bibtexParse = require('../bibtexParse');


/* checs can cite correctly, even thoguh probably want to improve so that stops at more than one and and converts latex to
 * html  */


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



bibtexParse.sortAlphabetically();



let authorYear = bibtexParse.citeAuthorYear('pelikan1999boa', false);
let authorYearBrackets = bibtexParse.citeAuthorYear('pelikan1999boa', true);
console.log(authorYear);
test('Author year test', t => t.deepEqual(authorYear, 'Pelikan, Martin and Goldberg, David E and Cant{\'u}-Paz, Erick, 1999'));
test('Author year test incl brackets', t => t.deepEqual(authorYearBrackets, '(Pelikan, Martin and Goldberg, David E and Cant{\'u}-Paz, Erick, 1999)'));

