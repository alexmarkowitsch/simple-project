FROM php:8.0-apache
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
RUN docker-php-ext-install pdo && docker-php-ext-enable pdo
RUN docker-php-ext-install pdo_mysql && docker-php-ext-enable pdo_mysql
RUN a2enmod rewrite

#increase URI length to 30k chars. Needed in survey creation when posting questions.

RUN echo "post_max_size = 32M" >> /usr/local/etc/php/php.ini
RUN echo "LimitRequestLine 30000" >> /etc/apache2/apache2.conf

# set the php application timezone to europe (default is 2 hours behind)
RUN echo "date.timezone = \"Europe/Berlin\" " >> /usr/local/etc/php/php.ini

RUN cp /usr/share/zoneinfo/Europe/Rome /etc/localtime && \
echo "Europe/Berlin" > /etc/timezone



